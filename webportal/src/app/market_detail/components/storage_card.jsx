// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Stack, Text } from 'office-ui-fabric-react';
import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import CodeWrapper from 'App/components/code_wrapper';

const StorageCard = props => {
  const { storages } = props;

  return (
    <CodeWrapper>
      {isEmpty(storages) ? (
        <Text>没有存储设置</Text>
      ) : (
        storages.map(storage => (
          <Stack key={storage.name} gap='m'>
            <Stack horizontal verticalAlign='center' gap='m'>
              <Text>存储类型:</Text>
              <Text>{storage.type}</Text>
            </Stack>
            <Stack horizontal verticalAlign='center' gap='m'>
              <Text>存储名称:</Text>
              <Text>{storage.name}</Text>
            </Stack>
            <Stack horizontal verticalAlign='center' gap='m'>
              <Text>存储路径:</Text>
              <Text>{storage.uri}</Text>
            </Stack>
          </Stack>
        ))
      )}
    </CodeWrapper>
  );
};

StorageCard.propTypes = {
  storages: PropTypes.arrayOf(PropTypes.object),
};

export default StorageCard;
