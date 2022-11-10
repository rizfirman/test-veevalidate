import { extend } from 'vee-validate'
import { required, numeric, email, max, min, ext, size } from 'vee-validate/dist/rules'
import { strongPassword, isPhoneNumber } from '~/utils/rules'

extend('required', {
  ...required,
  message: (_, values) => `${values._field_} tidak boleh kosong`
})

extend('password', {
  validate: (value) => {
    return strongPassword(value)
  },
  message: 'The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)'
})

extend('phone', {
  validate: (value) => {
    return isPhoneNumber(value)
  },
  message: (_, values) => `${values._field_} harus diisi dengan nomor telepon`
})

extend('numeric', {
  ...numeric,
  message: (_, values) => `${values._field_} harus diisi angka`
})

extend('email', {
  ...email,
  message: (_, values) => `${values._field_} harus valid`
})

extend('max', {
  ...max,
  message: 'maksimal {length} karakter'
})

extend('min', {
  ...min,
  message: 'minimal {length} karakter'
})

extend('ext', {
  ...ext,
  message: 'format file tidak valid'
})

extend('size', {
  ...size,
  message: 'ukuran file tidak boleh lebih dari {size} KB'
})
