import { scrollTo } from 'src/mode/native/mixins/api';
import _install from 'src/core';
import { core, render, extraConfigs, extraValidators } from './mode/mix';

const Vuescroll = {
  scrollTo,
  ..._install(core, render, extraConfigs, extraValidators)
};

export default Vuescroll;
