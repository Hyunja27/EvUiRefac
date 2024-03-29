import { parseComponent } from 'vue-template-compiler';
import mdText from '!!raw-loader!./api/heatMap.md';
import Default from './example/Default';
import DefaultRaw from '!!raw-loader!./example/Default';
import Event from './example/Event';
import EventRaw from '!!raw-loader!./example/Event';
import Time from './example/Time';
import TimeRaw from '!!raw-loader!./example/Time';
import Gradient from './example/Gradient';
import GradientRaw from '!!raw-loader!./example/Gradient';
import ColorsByRange from './example/ColorsByRange';
import ColorsByRangeRaw from '!!raw-loader!./example/ColorsByRange';
import SelectLabel from './example/SelectLabel';
import SelectLabelRaw from '!!raw-loader!./example/SelectLabel';
import SelectItem from './example/SelectItem';
import SelectItemRaw from '!!raw-loader!./example/SelectItem';
import SelectBoth from './example/SelectBoth';
import SelectBothRaw from '!!raw-loader!./example/SelectBoth';
import Scrollbar from './example/Scrollbar';
import ScrollbarRaw from '!!raw-loader!./example/Scrollbar';

export default {
  mdText,
  components: {
    Default: {
      description: 'HeatMap은 데이터의 분포를 색상에 따라 시각적으로 인지하도록 합니다',
      component: Default,
      parsedData: parseComponent(DefaultRaw),
    },
    Time: {
      description: '실시간으로 데이터를 받아 표현할 수 있습니다. (label line 표시)',
      component: Time,
      parsedData: parseComponent(TimeRaw),
    },
    Event: {
      description: 'Drag Select, Click, Double Click 이벤트 등록이 가능 합니다.',
      component: Event,
      parsedData: parseComponent(EventRaw),
    },
    'Gradient Legend': {
      description: 'gradient 범주로 표현 가능합니다.',
      component: Gradient,
      parsedData: parseComponent(GradientRaw),
    },
    'Separate Colors By Range': {
      description: '범위별 색상과 라벨을 지정할 수 있습니다.',
      component: ColorsByRange,
      parsedData: parseComponent(ColorsByRangeRaw),
    },
    SelectItem: {
      description: '선택한 아이템이 하이라이트 되는 기능입니다.',
      component: SelectItem,
      parsedData: parseComponent(SelectItemRaw),
    },
    SelectLabel: {
      description: '차트 전체에서 선택한 라벨 내 모든 아이템이 하이라이트 되는 기능입니다.',
      component: SelectLabel,
      parsedData: parseComponent(SelectLabelRaw),
    },
    SelectBoth: {
      description: '아이템을 선택 기능과 라벨 선택 기능을 동시에 사용할 수 있습니다.',
      component: SelectBoth,
      parsedData: parseComponent(SelectBothRaw),
    },
    Scrollbar: {
      description: '차트 축의 range 설정하여 scrollbar를 이용하여 차트 축을 이동할 수 있습니다.',
      component: Scrollbar,
      parsedData: parseComponent(ScrollbarRaw),
    },
  },
};
