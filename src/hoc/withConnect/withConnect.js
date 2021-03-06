// @flow
import React, { type AbstractComponent } from 'react';
import { Spin, Result } from 'antd';

type WithConnect<T> = {
  response: Response<any>,
  mapResponseToProps: (any[]) => T,
};

function withConnect<Props, OtherProps>(
  WrappedComponent: AbstractComponent<Props & OtherProps>,
): AbstractComponent<WithConnect<Props> & OtherProps> {
  return function WrapperComponent({ response, mapResponseToProps, ...otherProps }: WithConnect<Props> & OtherProps) {
    if (response.rejected) {
      return (
        <Result
          status='error'
          title='Échec du chargement'
          subTitle="Une erreur s'est produite pendant le chargement des données"
        />
      );
    }
    if (response.fulfilled) {
      // $FlowFixMe: Should accept (WithConnect<Props> & OtherProps)
      return <WrappedComponent {...mapResponseToProps(response.value)} {...otherProps} />;
    }

    return <Spin size={'large'} />;
  };
}

export default withConnect;
