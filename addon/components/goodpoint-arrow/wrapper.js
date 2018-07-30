import Component from '@ember/component';
import layout from '../../templates/components/goodpoint-arrow/wrapper';

export default Component.extend({
  layout,
  
  didInsertElement() {
    this._super(...arguments);
    this.get('register')(this.element);
  }
});
