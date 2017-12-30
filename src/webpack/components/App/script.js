const photos = require('../../data/photos.json');

export default {
  data() {
    return {
      photos: [],
    };
  },
  created() {
    this.photos = photos;
  },
};
