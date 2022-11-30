import { Header } from 'components/Header';
import { Table } from 'components/Table';
import React, { FC } from 'react';
import './index.scss';

const App: FC = () => (
	<div className="app">
		<Header />
		<Table />
	</div>
);

export default App;
