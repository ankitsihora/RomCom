import React from 'react';
import {createServer} from 'miragejs';

// This file contains server code and api calling functions.

// Server code
export const mockServerStart = () => {
  if (window.server) {
    window.server?.shutdown?.();
  }

  window.server = createServer({
    routes() {
      this.get('/api/pages/:id', (schema, request) => {
        let id = request.params.id;
        let page1 = require('../../utils/backendData/CONTENTLISTINGPAGE-PAGE1.json');
        let page2 = require('../../utils/backendData/CONTENTLISTINGPAGE-PAGE2.json');
        let page3 = require('../../utils/backendData/CONTENTLISTINGPAGE-PAGE3.json');
        let page = [page1, page2, page3];
        return page[id - 1];
      });
    },
    timing: 2000,
  });
};

// Api call to server
export const mockApiCall = id => {
  return fetch(`/api/pages/${id}`)
    .then(res => res.json())
    .then(json => {
      return json;
    });
};
