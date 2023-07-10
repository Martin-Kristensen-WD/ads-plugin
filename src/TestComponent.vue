<template>
  <div>
    <h1>
      TESTING THE ADS
    </h1>
    <div>{{ getId(slotId) }}</div>
    <div>{{ getId(slotId) }}</div>
    <div>{{ getId(slotId) }}</div>
    <div>{{ getId(slotId) }}</div>
    <div>{{ getId(slotId) }}</div>
    <div>{{ getId(slotId) }}</div>
    <div>{{ getId(slotId) }}</div>
    <div>{{ getId(slotId) }}</div>
  </div>
</template>



<script setup>

// eslint-disable-next-line
defineProps({
  slotId: {
    type: String,
    default: 'dsk_lb',
    required: true
  },
});


const idList = {
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

// protected
const nextAvailableId = (idList, increment = true) => {
  if (idList && idList.currId < idList.max) {
    const nextId = increment ? (idList.currId += 1) : idList.currId;

    return (idList.currId = Math.max(nextId, idList.min));
  }
  return null;
};

// public
const getId = (key) => {
  const { currId, child } = idList[key];
  const parentSlotId = nextAvailableId(idList[key]);

  if (parentSlotId !== null) {
    if (child && currId === child.min && child.currId < child.max) {
      const childSlotId = nextAvailableId(child, false);
      if (childSlotId !== null) {
        return key + parentSlotId + '_' + childSlotId;
      }
    } else {
      return key + parentSlotId;
    }
  }

  return null;
};


</script>


<style>
h1{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>