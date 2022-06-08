/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import {mockApiCall, mockServerStart} from '../../services/api';

import ImageContainer from '../ImageContainer';
import {styles} from './styles';

// List view for romantic comedy page
const ListView = props => {
  const [state, setState] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [listData, setListData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search text changes handler
  const onChangeSearch = query => {
    setSearchQuery(query);
    !!searchQuery && setVisibleData(listData);
    setVisibleData(
      listData.filter(value =>
        value.name.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  // On end reach function to lode more data for pagination in list
  const handleOnEndReached = () => {
    parseInt(state?.page?.['page-num-requested']) *
      parseInt(state?.page?.['page-size-requested']) <
    parseInt(state?.page?.['total-content-items'])
      ? fetchData(1 + parseInt(state?.page?.['page-num-requested']))
      : {};
  };

  // calling api (mock api from here)
  const fetchData = useCallback(
    async id => {
      setLoading(true);
      const data = await mockApiCall(id);
      setState(data);
      data &&
        setListData([...listData, ...data?.page?.['content-items']?.content]);
      data &&
        setVisibleData([
          ...visibleData,
          ...data?.page?.['content-items']?.content,
        ]);
      setLoading(false);
    },
    [listData, visibleData],
  );

  // For initial api call only
  useEffect(() => {
    mockServerStart();
    fetchData(1);
  }, []);

  return (
    <FlatList
      data={visibleData}
      ListHeaderComponent={() =>
        props.listProps.route.params ? (
          <Searchbar
            style={{margin: 12}}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            autoFocus={true}
          />
        ) : null
      }
      renderItem={({item}) => <ImageContainer item={item} />}
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={loading && <ActivityIndicator />}
      showsVerticalScrollIndicator={false}
      onEndReached={searchQuery === '' && handleOnEndReached}
      onEndReachedThreshold={0.5}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

export default ListView;
