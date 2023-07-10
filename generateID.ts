export class GenerateID {
  protected idList = {
    dsk_lb: {
      min: 1,
      max: 5,
      currId: 0,
    },
    dsk_rec: {
      min: 1,
      max: 7,
      currId: 0,
      child: {
        min: 2,
        max: 10,
        currId: 0,
      },
    },

    dsk_rec_sticky: {
      min: 1,
      max: 2,
      currId: 0,
    },

    dsk_sky: {
      min: 1,
      max: 2,
      currId: 0,
    },

    mob: {
      min: 1,
      max: 5,
      currId: 0,
      child: {
        min: 2,
        max: 10,
        currId: 0,
      },
    },
  };

  constructor() {}

  protected nextAvailableId = (idList, increment = true) => {
    if (idList && idList.currId < idList.max) {
      const nextId = increment ? (idList.currId += 1) : idList.currId;

      return (idList.currId = Math.max(nextId, idList.min));
    }
    return null;
  };
}
