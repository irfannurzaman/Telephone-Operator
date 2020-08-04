<template>
    <q-dialog v-model="dataWakeupcall.dialogWakeupcall" persistent>
        <q-card style="width: 455px; height: 700px;  max-width: 90vw;">
            <q-toolbar>
                <q-toolbar-title class="text-white text-weight-medium">WAKE UP CALL </q-toolbar-title>
            </q-toolbar>
            <q-card-section style="height: 530px">
                <div class='row'>
                    <SSelect :options="mode" v-model="dataMode" style="width: 250px; marginRight: 20px; marginTop: -5px" label-text="Mode"/>
                    <SInput 
                    label-text="Time" 
                    style="width: 130px; height: 30px; marginTop: -5px" 
                    filled 
                    v-model="timeWithSeconds" 
                    >
                        <template v-slot:append>
                            <span class="mdi mdi-alarm">                                
                                <q-popup-proxy>
                                    <q-time
                                        landscape
                                        v-model="timeWithSeconds"
                                        format24h
                                    />
                                </q-popup-proxy>
                            </span>
                        </template>
                    </SInput>
                    <SInput 
                    @blur="onClickGroupName"
                    v-model="groupName" 
                    style="width: 250px; marginRight: 20px; marginTop: -5px" 
                    label-text="Group Name"
                    :disable="disableGroupName"/>
                    <q-checkbox 
                    size="xs" 
                    v-model="shape" 
                    label="Group Wake Up Call" 
                    style="marginLeft: -10px"/>
                    <SInput 
                    @blur="onClickRoomNumber"  
                    v-model="roomNumber" 
                    :disable="roomnumberDisable"
                    style="width: 130px; marginRight: 20px; marginTop: -5px" 
                    label-text="Room Number"/>
                    <SInput 
                    v-model="dataWakeupcall.prepareData.name" 
                    disable 
                    style="width: 250px; marginTop: -5px" 
                    label-text="Guest Name"/>
                    <SInput 
                    v-model="dataWakeupcall.prepareData.ankunft" 
                    disable 
                    style="width: 130px; marginRight: 20px; marginTop: -5px" 
                    label-text="Arrival">
                        <span class="mdi mdi-calendar"></span>
                    </SInput>
                    <SInput 
                    v-model="dataWakeupcall.prepareData.abreise" 
                    disable style="width: 130px; marginRight: 20px; marginTop: -5px" 
                    label-text="Depature">
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
        <q-card-actions align="right" style="marginTop: -5px; bottom: 0px">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn style="height: 30px" @click="saveData" label="Save" color="primary" />
        </q-card-actions>
        </q-card>
    </q-dialog >
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch } from '@vue/composition-api';
import { tableWakeupcall, mode, dataTableWakeupcall } from '../tables/telephoneOperator.table'
import {formatDates} from '../../../helpers/dateFormat.helpers'
export default defineComponent({
    props: {
        dataWakeupcall: {type: Object, default: true}
    },
    setup(props, {emit}){
    let date = formatDates(new Date())
    const state = reactive({
        timeWithSeconds: '00:00',
        roomNumber: '',
        dataMode:   {
                    label: 'Set wake up call',
                    value: 'Wakeup Calls ON;01;PANA'
                    },
        shape: false,
        disableGroupName: true,
        roomnumberDisable: false,
        groupName: ''
    })

    const cekStatus = () => {
        emit('cekStatus', state.roomNumber)
    }

    const onClickRoomNumber = () => {
        emit('onClickRoomNumber', state.roomNumber)
    }

    const onClickGroupName = () => {
        emit('onClickGroupName', state.groupName)
    }

    watch(() => state.shape,
    (shape) => {
            if (shape == true) {
                state.disableGroupName = false
                state.roomnumberDisable = true
            } else {
                state.disableGroupName = true
                state.roomnumberDisable = false
            }
    })

    return {
        ...toRefs(state),
        tableWakeupcall,
        cekStatus,
        mode,
        onClickRoomNumber,
        onClickGroupName,
        pagination: { page: 1, rowsPerPage: 0 }
    }
    }
})
</script>

<style lang="scss" scoped>
::v-deep .table-accounting-date {
    max-height: 36vh;
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