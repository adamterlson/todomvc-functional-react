import React from 'react';

export default addtlProps => Component => props =>
    <Component {...{ ...props, ...addtlProps }} />;
