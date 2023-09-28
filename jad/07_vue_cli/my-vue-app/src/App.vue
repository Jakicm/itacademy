<template>
  <div>
    <h1>Imenik</h1>
    <div>
      <input v-model="name" placeholder="Ime" />
      <input v-model="phone" placeholder="Broj telefona" />
      <button @click="addContact">Dodaj kontakt</button>
    </div>
    <ul>
      <li v-for="(contact, index) in contacts" :key="index">
        {{ contact.name }} - {{ contact.phone }}
        <button @click="deleteContact(index)">Obriši</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      contacts: [],
    };
  },
  mounted() {
    // Učitaj kontakte iz lokalnog skladišta prilikom prvog učitavanja aplikacije
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.contacts = savedContacts;
  },
  watch: {
    // Sačuvaj kontakte u lokalnom skladištu svaki put kad se lista promeni
    contacts: {
      handler(newContacts) {
        localStorage.setItem('contacts', JSON.stringify(newContacts));
      },
      deep: true,
    },
  },
  methods: {
    addContact() {
      if (this.name && this.phone) {
        this.contacts.push({ name: this.name, phone: this.phone });
        this.name = '';
        this.phone = '';
      }
    },
    deleteContact(index) {
      this.contacts.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* Dodajte svoj CSS stil ovde */

</style>
