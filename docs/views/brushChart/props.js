import { parseComponent } from 'vue-template-compiler';
import mdText from '!!raw-loader!./api/brushChart.md';
import Default from './example/Default';
import DefaultRaw from '!!raw-loader!./example/Default';
import UseDebounce from './example/UseDebounce';
import UseDebounceRaw from '!!raw-loader!./example/UseDebounce';
import SelectLabelGroup from './example/SelectLabelGroup';
import SelectLabelGroupRaw from '!!raw-loader!./example/SelectLabelGroup';
import SelectLabelGroupIndividual from './example/SelectLabelGroupIndividual';
import SelectLabelGroupIndividualRaw from '!!raw-loader!./example/SelectLabelGroupIndividual';
import Event from './example/Event';
import EventRaw from '!!raw-loader!./example/Event';
import PlotLine from './example/PlotLine';
import PlotLineRaw from '!!raw-loader!./example/PlotLine';
import AxisTitle from './example/AxisTitle';
import AxisTitleRaw from '!!raw-loader!./example/AxisTitle';

export default {
  mdText,
  components: {
    Default: {
      description: 'Chart와 Brush를 Chart Group로 감싸 차트의 줌 위치와 원본 차트를 보여주는 Brush 기능을 사용할 수 있습니다.',
      component: Default,
      parsedData: parseComponent(DefaultRaw),
    },
    UseDebounce: {
      description: 'Brush의 useDebounce 옵션을 이용하여 true(Default)이면 조절 된 Brush 영역의 마지막을 가지고 차트가 업데이트 되고 false이면 Brush 영역 조절과 동시에 차트가 업데이트 됩니다.',
      component: UseDebounce,
      parsedData: parseComponent(UseDebounceRaw),
    },
    'Plot line & Plot band': {
      description: '기존 Chart에 표시 된 배경과 선이 Brush에도 동일하게 그려집니다.',
      component: PlotLine,
      parsedData: parseComponent(PlotLineRaw),
    },
    AxisTitle: {
      description: 'Brush에서는 X Axis, Y Axis Title이 표시되지 않습니다.',
      component: AxisTitle,
      parsedData: parseComponent(AxisTitleRaw),
    },
    'Select Label Group': {
      description: 'Chart Group의 GroupSelectedLabel을 이용하여 선택된 Label은 브러시의 영역이 이동되더라도 고정된 위치에 있습니다.',
      component: SelectLabelGroup,
      parsedData: parseComponent(SelectLabelGroupRaw),
    },
    'Select Label Group Individual': {
      description: 'Chart Group의 각자 Chart에 selectedLabel을 이용하여 개별로 선택된 Label은 브러시의 영역이 이동되더라도 고정된 위치에 있습니다.',
      component: SelectLabelGroupIndividual,
      parsedData: parseComponent(SelectLabelGroupIndividualRaw),
    },
    Event: {
      description: '1. Brush 영역 조절, 2. wheel/mouse drag 를 이용한 Brush 영역 이동, 3. Brush 영역 외 영역을 클릭 시 해당 영역으로 순간 이동이 가능합니다.',
      component: Event,
      parsedData: parseComponent(EventRaw),
    },
  },
};
