<template>
  <q-dialog v-model="dialogAutoTransferModel">
    <q-card style="width: 700px;">
      <q-toolbar>
        <q-toolbar-title class="text-white text-weight-medium">
          Serch Room Number
        </q-toolbar-title>
      </q-toolbar>

      <q-card-section>
        <div class="row">
          <div class="col-6 q-pr-sm">
            <SInput label-text="Room Number" />
            <q-btn
              block
              color="primary"
              max-height="28"
              icon="search"
              label="Search"
              type="submit"
              class="q-mb-md full-width"
            />
          </div>
          <div class="col-6 q-pl-sm">
            <SInput label-text="Name" />
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn
          color="white"
          text-color="black"
          label="Cancle"
          @click="$emit('onDialogAutoTransfer', false)"
        />
        <q-btn
          color="primary"
          label="OK"
          @click="$emit('onDialogAutoTransfer', false)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
} from '@vue/composition-api';

export default defineComponent({
  props: {
    dialog: { type: Boolean, required: true },
  },
  setup(props, { emit }) {
    const state = reactive({
      isFetching: false,
    });

    const dialogAutoTransferModel = computed({
      get: () => props.dialog,
      set: (val) => {
        emit('onDialogAutoTransfer', val);
      },
    });

    return {
      dialogAutoTransferModel,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.q-toolbar {
  background: $primary-grad;
}
</style>
