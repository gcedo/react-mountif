import React from 'react';
import Classic from './classic/example.js';
import Modern from './modern/example.js';

React.render(<Modern />, document.getElementById('react-mount-modern'));
React.render(<Classic />, document.getElementById('react-mount-classic'));
