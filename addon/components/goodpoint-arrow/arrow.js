import Component from '@ember/component';
import layout from '../../templates/components/goodpoint-arrow/arrow';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  layout,
  
  tagName: '',
  
  styleComponent: 'goodpoint-arrow/arrow/style',
  
  svgStyle: computed('arrow.connection', function() {
    const boundingBoxTop = this.get('arrow.connection.offsetBoundingBox.top');
    const boundingBoxLeft = this.get('arrow.connection.offsetBoundingBox.left');
    return htmlSafe(`pointer-events: none;
      position: absolute;
      top: ${boundingBoxTop}px;
      left: ${boundingBoxLeft}px;
    `);
  })
});
