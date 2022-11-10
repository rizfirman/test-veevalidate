<template>
  <ValidationObserver
    ref="form"
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
  >
    <form @submit.prevent="onSubmit">
      <div class="mb-4">
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
      </div>
      <div class="mb-6">
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
      </div>

      <div class="mb-6">
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
      </div>

      <div class="mb-6">
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
      </div>

      <div class="mb-6">
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
import { ValidationObserver } from 'vee-validate'
export default {
  name: 'IndexPage',
  components: {
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
