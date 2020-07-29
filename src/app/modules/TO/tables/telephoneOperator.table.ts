import { TableHeader } from '~/components/VhpUI/typings';

export const tableHeaders: TableHeader[] = [
  {
    label: 'Message',
    name: 'icons',
    field: 'resli-wabkurz',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Locator',
    field: 'voucher-nr',
    name: 'roomNumber',
    align: 'left',
    sortable: false,
    style: 'max-width: 5px'
  },
  {
    label: 'Reservation Group',
    field: 'grpflag',
    name: 'floor',
    align: 'left',
    sortable: false,
    style: 'max-width: 5px'
  },
  {
    label: 'Reservation Name',
    field: 'reser-name',
    name: 'roomType',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Room Number',
    field: 'zinr',
    name: 'roomStatus',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Guest Name',
    field: 'resli-name',
    name: 'guestNote',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Segment',
    field: 'segmentcode',
    name: 'guestPax',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Nation',
    field: 'nation1',
    name: 'arrivalDate',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Reservation Status',
    field: 'resstatus',
    name: 'arrivalTime',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Arival',
    field: 'ankunft',
    name: 'departureDate',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Depature',
    field: 'abreise',
    name: 'departureTime',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Arrival Time',
    field: 'ankzeit',
    name: 'reserveName',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Departure Time',
    field: 'abreisezeit',
    name: 'reserveRemark',
    align: 'left',
    sortable: false,
    style: 'max-width: 400px',
  },
  {
    label: 'Estimated Time of Arriva',
    field: 'flight-nr1',
    name: 'reserveRequest',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Flight Number',
    field: 'flight-nr2',
    name: 'reserveRequest',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Estimated Time of Depature',
    field: 'flight-nr3',
    name: 'reserveRequest',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Quantity',
    field: 'zimmeranz',
    name: 'guestName',
    align: 'left',
    sortable: false,
  },
  {
    label: 'Category',
    field: 'kurzbez',
    name: 'invoice-nr',
    sortable: false,
  },
  {
    label: 'Adult',
    field: 'erwachs',
    name: 'invoice-nr',
    sortable: false,
  },
  {
    label: 'Child',
    field: 'kind1 ',
    name: 'invoice-nr',
    sortable: false,
  },
  {
    label: 'Compliment',
    field: 'gratis',
    name: 'invoice-nr',
    sortable: false,
  },
  {
    label: 'Currency',
    field: 'waeh-wabkurz',
    name: 'invoice-nr',
    sortable: false,
  },
  {
    label: 'Reservation Number',
    field: 'resnr',
    name: 'invoice-nr',
    sortable: false,
  },
  {
    label: 'Key Card',
    field: 'betrieb-gast',
    name: 'invoice-nr',
    sortable: false,
  },
  {
    label: 'Group Name',
    field: 'groupname',
    name: 'invoice-nr',
    sortable: false,
  },
  {
    label: 'Check-in ID',
    field: 'cancelled-id',
    name: 'invoice-nr',
    sortable: false,
  },
  {
    label: 'Change ID',
    field: 'changed-id',
    name: 'inr',
    sortable: false,
  },
  {
    label: 'Remark',
    field: 'bemerk',
    name: 'Remark',
    sortable: false,
  },
  { name: 'actions', field: 'actions' },
];


export const sorting = [
  {
    label : 'Guest Name',
    value : 1
    },
    {
    label : 'Reserve Name',
    value : 2
    },
    {
    label : 'Nation',
    value : 3
    },
    {
    label : 'Reservation no',
    value : 4
    },
]

export const display = [
  {
    label: 'Reservation',
    value: 1
  },
  {
    label: 'In-house Guest',
    value: 2
  },
  {
    label: 'Expected Departure',
    value: 3
  },
  {
    label: 'Departed',
    value: 4
  },
  {
    label: 'ALL TODAY',
    value: 5
  },
]

export const mode = [
  {
    label: 'Set wake up call',
    value: 1
  },
  {
    label: 'Set Wake up call',
    value: 2
  }
]

export const tableWakeupcall = [
  {
    label: 'Guest Name',
    field: 'name',
    name: 'inr',
    sortable: true,
  },
  {
    label: 'Room Numer',
    field: 'zinr',
    name: 'inr',
    sortable: true,
  },
  {
    label: 'Arival',
    field: 'ankunft',
    name: 'inr',
    sortable: true,
  },
  {
    label: 'Depature',
    field: 'abreise',
    name: 'inr',
    sortable: true,
  },
  {
    label: 'Group Name',
    field: 'resname',
    name: 'inr',
    sortable: true,
  },
  {
    label: 'Created',
    field: '',
    name: 'inr',
    sortable: true,
  },
  {
    label: 'HH.SS',
    field: '',
    name: 'inr',
    sortable: true,
  },
]


export const dataTable = (dataTable) => {
    const data = dataTable.telopList['telop-list'].map((items) =>({
      'resli-wabkurz': items['resli-wabkurz'],
      'voucher-nr': items['voucher-nr'],
      grpflag: items.grpflag == true ? 'Yes' : 'No',
      'reser-name': items['reser-name'],
      'zinr': items.zinr,
      'resli-name': items['resli-name'],
      segmentcode: items.segmentcode,
      nation1: items.nation1,
      resstatus: items.resstatus == 1?
      'Guaranted': items.resstatus == 2?
      '6 PM': items.resstatus == 3?
      'Teantive': items.resstatus == 4?
      'WaitList': items.resstatus == 5?
      'VerbalConfirm': items.resstatus == 6?
      'Inhouse' : items.resstatus == 7?
      '' : items.resstatus == 8?
      'Departed' : items.resstatus == 9?
      'Cancelled' : items.resstatus == 10?
      'NoShow' : items.resstatus == 11?
      'ShareRes' : items.resstatus == 12?
      'AccGuest' : items.resstatus == 13?
      'RmSharer' : items.resstatus == 14?
      'AccGuest' : items.resstatus == 15?
      '' : items.resstatus == 16?
      '' : items.resstatus == 17?
      'AccGuest' : items.resstatus == 18?
      '' : 'AccGuest' ,
      ankunft: items.ankunft,
      abreise: items.abreise,
      ankzeit: items.ankzeit ,
      abreisezeit: items.abreisezeit,
      'flight-nr1': items['flight-nr'].substr(0,5),
      'flight-nr2': items['flight-nr'].substr(6,10),
      'flight-nr3': items['flight-nr'].substr(11,15),
      zimmeranz: items.zimmeranz,
      kurzbez: items.kurzbez,
      erwachs: items.erwachs,
      kind1: items.kind1,
      gratis: items.gratis, 
      'waeh-wabkurz' : items['waeh-wabkurz'],
      resnr: items.resnr,
      'betrieb-gast' : items['betrieb-gast'],
      groupname: items.groupname,
      'cancelled-id': items['cancelled-id'],
      'changed-id': items['changed-id'],
      bemerk: items.bemerk.length < 53 ? 
      items.bemerk : `${items.bemerk.substr(0,53)}...`,
      bemarkToltip: items.bemerk,
      actions: '',
      reslinnr: items.reslinnr,
      gastnr : items.gastnr,
      gastnrmember : items.gastnrmember
  }))

  return data
}