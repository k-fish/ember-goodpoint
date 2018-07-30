import Component from '@ember/component';
import layout from '../templates/components/goodpoint-arrow';
import { computed } from '@ember/object';
import { Arrow } from 'goodpoint.js';

export default Component.extend({
  layout,
  
  _arrow: computed('_from', '_to', function() {
    const from = this.get('_from');
    const to = this.get('_to');
    
    if (!from || !to) {
      return;
    }
    
    return new Arrow({ from, to });
  }),
  
  actions: {
    register(type, element) {
      if (type === 'from') {
        this.set('_from', element);
      }
      
      if (type === 'to') {
        this.set('_to', element);
      }
    }
  }
});
