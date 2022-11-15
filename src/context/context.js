import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

//provider i consumer

const GithubProvider = ({children}) => {
    return<GithubContext.Provider>{children}</GithubContext.Provider>
}
//to powyżej wrzuca całą aplikację jako children w context API
