<template>
    <ValidationObserver
      ref="form"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
    >
      <form @submit.prevent="onSubmit">
        <div class="mb-4">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required|email"
            name="email"
          >
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-grey-darker
              "
              id="username"
              placeholder="Email"
              name="email"
              v-model="email"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="mb-6">
          <ValidationProvider
            v-slot="{ errors }"
            rules="password|required"
            name="password"
          >
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="
                shadow
                appearance-none
                border border-red
                rounded
                w-full
                py-2
                px-3
                text-grey-darker
                mb-3
              "
              id="password"
              type="password"
              placeholder="******************"
              name="password"
              v-model="password"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
  
        <div class="mb-6">
          <ValidationProvider
            v-slot="{ errors }"
            rules="phone|numeric|required"
            name="Phone"
          >
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Phone
            </label>
            <input
              class="
                shadow
                appearance-none
                border border-red
                rounded
                w-full
                py-2
                px-3
                text-grey-darker
                mb-3
              "
              id="phone"
              name="Phone"
              v-model="phone"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
  
        <div class="mb-6">
          <ValidationProvider
            v-slot="{ errors }"
            rules="max:16|min:16|numeric|required"
            name="Nik"
          >
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="Nik"
            >
              NIK
            </label>
            <input
              class="
                shadow
                appearance-none
                border border-red
                rounded
                w-full
                py-2
                px-3
                text-grey-darker
                mb-3
              "
              id="Nik"
              name="Nik"
              v-model="nik"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
  
        <div class="mb-6">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required|ext:jpg,png,jpeg|size:1024"
            name="File"
            ref="provider"
          >
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="File"
            >
              File
            </label>
            <input
              class="
                shadow
                appearance-none
                border border-red
                rounded
                w-full
                py-2
                px-3
                text-grey-darker
                mb-3
              "
              type="file"
              id="File"
              name="File"
              @change="handleFileChange"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="
              bg-blue-500
              hover:bg-blue-dark
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </ValidationObserver>
  </template>
  
  <script>
  import { ValidationProvider, ValidationObserver } from 'vee-validate'
  export default {
    name: 'IndexPage',
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data () {
      return {
        email: '',
        password: '',
        phone: '',
        address: '',
        nik: '',
        file: null
      }
    },
    methods: {
      async onSubmit () {
        const isValid = await this.$refs.form.validate()
        console.log(isValid)
        console.log(this.file)
      },
      async handleFileChange (e) {
        const { valid } = await this.$refs.provider.validate(e)
  
        if (valid) {
          this.file = e.target.files[0]
        } else {
          this.file = null
        }
      }
    }
  }
  </script>
  