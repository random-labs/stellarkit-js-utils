import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

import StellarAPI from './src/js/StellarAPI.js'
import HorizonServer from './src/js/HorizonServer.js'
import StellarWallet from './src/js/StellarWallet.js'
import LedgerAPI from './src/js/LedgerAPI.js'
import LedgerAPITransport from './src/js/LedgerAPITransport.js'
import PaymentDialog from './src/vue/PaymentDialog.vue'
import PaymentView from './src/vue/PaymentView.vue'
import BuyTokenDialog from './src/vue/BuyTokenDialog.vue'
import DialogTitleBar from './src/vue/DialogTitleBar.vue'
import TransactionLogger from './src/js/TransactionLogger.js'
import * as StellarSdk from 'stellar-sdk'

export {
  StellarAPI,
  HorizonServer,
  PaymentDialog,
  PaymentView,
  DialogTitleBar,
  BuyTokenDialog,
  StellarWallet,
  LedgerAPI,
  LedgerAPITransport,
  TransactionLogger,
  StellarSdk
}