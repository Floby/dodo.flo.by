import Controller from '@ember/controller';

export default Controller.extend({
  title: null,

  init () {
    this._super(...arguments)
    this.reset()
  },

  reset () {
    this.set('title', '')
  },

  actions: {
    enterActive (_, event) {
      if (event.key === 'Enter') {
        this.send('createNote', this.get('title'))
      }
    }
  }
});
