<template>
    <q-dialog v-model="dataWakeupcall.dialogWakeupcall" persistent>
        <q-card style="width: 455px; height: auto;  max-width: 90vw;">
            <q-toolbar>
                <q-toolbar-title class="text-white text-weight-medium">WAKE UP CALL </q-toolbar-title>
            </q-toolbar>
            <q-card-section>
                <div class='row'>
                    <SSelect :options="mode" v-model="dataMode" style="width: 250px; marginRight: 20px; marginTop: -5px" label-text="Mode"/>
                    <SInput label-text="Time" style="width: 130px; height: 30px; marginTop: -5px" filled v-model="timeWithSeconds" mask="fulltime" :rules="['fulltime']">
                        <template v-slot:append>
                            <span class="mdi mdi-alarm">                                
                                <q-popup-proxy>
                                    <q-time
                                        landscape
                                        v-model="timeWithSeconds"
                                        with-seconds
                                        format24h
                                    />
                                </q-popup-proxy>
                            </span>
                        </template>
                    </SInput>
                    <SInput style="width: 250px; marginRight: 20px; marginTop: -5px" label-text="Group Name"/>
                    <q-checkbox size="xs" v-model="shape" label="Group Wake Up Call" style="marginLeft: -10px"/>
                    <SInput v-model="roomNumber" style="width: 130px; marginRight: 20px; marginTop: -5px" label-text="Room Number"/>
                    <SInput style="width: 250px; marginTop: -5px" label-text="Guest Name"/>
                    <SInput style="width: 130px; marginRight: 20px; marginTop: -5px" label-text="Arrival">
                        <span class="mdi mdi-calendar"></span>
                    </SInput>
                    <SInput style="width: 130px; marginRight: 20px; marginTop: -5px" label-text="Depature">
                        <span class="mdi mdi-calendar"></span>
                    </SInput>
                    <q-btn
                        block
                        size= "sm"
                        color="primary"
                        max-height="5"
                        style="height: 25px; width: 100px; marginTop: 20px"
                        label="Cek Status"
                        type="submit"
                        class="q-mt-md"
                        @click="cekStatus"
                    />
                </div>
                <STable 
                :loading="dataWakeupcall.isFetching" 
                :columns="tableWakeupcall" 
                :pagination.sync="pagination"
                class="table-accounting-date"
                hide-bottom
                :data="dataWakeupcall.data" />
            </q-card-section>
        <q-separator style="marginTop: -10px"/>
        <q-card-actions align="right" style="marginTop: -5px;">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn style="height: 30px" @click="saveData" label="Save" color="primary" />
        </q-card-actions>
        </q-card>
    </q-dialog >
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch } from '@vue/composition-api';
import { tableWakeupcall, mode } from '../tables/telephoneOperator.table'
export default defineComponent({
    props: {
        dataWakeupcall: {type: Object, default: true}
    },
    setup(_, {emit}){
    const state = reactive({
        timeWithSeconds: '10:56:00',
        roomNumber: ''
    })

    const cekStatus = () => {
        emit('cekStatus', state.roomNumber)
    }
    return {
        ...toRefs(state),
        tableWakeupcall,
        cekStatus,
        mode,
        pagination: { page: 1, rowsPerPage: 0 }
    }
    }
})
</script>

<style lang="scss" scoped>
::v-deep .table-accounting-date {
    max-height: 30vh;
    thead tr {
    th {
        position: sticky;
        z-index: 3;
    }

    &:first-child th {
      top: 0;
    }
  }
}
.q-toolbar {
    background: $primary-grad;
}
</style>