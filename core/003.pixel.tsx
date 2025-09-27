//'use server'
//import { pixel } from '@pixel/003.pixel.pvt';
import * as ActPxl from "@act/pixel.action"
import * as ActClr from "@act/color.action"

import * as FS from 'fs-extra'

var bit0, bit1, bit2

export const initPixel = async (val) => {
  //bit0 = await pixel( ActPxl.INIT_PIXEL , {})
  return bit0
}

export const openColor = async (val) => {
  //var dat = await FS.readJSON('./model/color-list/000.color.name.json')
  //bit0 = await pixel( ActClr.OPEN_COLOR , { dat })
  return bit0
}

export const listColor = async (val) => {
  //bit0 = await pixel( ActClr.LIST_COLOR , {})
  return bit0
}

export const selectColor = async (val) => {
  //bit0 = await pixel( ActClr.SELECT_COLOR , {}) 
  return bit0
}

export const mixColor = async (idx, src) => {
  //bit0 = await pixel( ActClr.MIX_COLOR , {idx, src}) 
  return bit0
}

export const dullColor = async (idx, val ) => {
  //bit0 = await pixel( ActClr.DULL_COLOR , { idx, val }) 
  return bit0
}