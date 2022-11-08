import { useContext } from 'react';
import { cookieAuth } from '../context/cookieAuth';

export default () => useContext(cookieAuth);