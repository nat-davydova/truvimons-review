import React from 'react';

import classes from './FooterColTitle.module.scss';

const footerColTitle = (props) => {
	return (<h5 className={classes.footer_colTitle}>
		{props.children}
	</h5>);
};

export default footerColTitle;