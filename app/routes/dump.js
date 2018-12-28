import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  classNames: ['no-dump-preview'],
  notes: inject(),

  resetController (controller) {
    controller.reset()
  },

  actions: {
    createNote (title) {
      if (!title) {
        return
      }
      this.get('notes').create(title)
      this.transitionTo('index')
    }
  }
});
