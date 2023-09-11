// app.js
new Vue({
    el: '#app',
    data() {
      return {
        contacts: [],
        newContact: {
          name: '',
          phone: ''
        }
      };
    },
    mounted() {
      // Retrieve contacts from local storage on initial load
      const storedContacts = localStorage.getItem('contacts');
      if (storedContacts) {
        this.contacts = JSON.parse(storedContacts);
      }
    },
    methods: {
      addContact() {
        if (this.newContact.name && this.newContact.phone) {
          this.contacts.push({ ...this.newContact });
          this.saveContacts();
          this.clearForm();
        }
      },
      saveContacts() {
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      },
      clearForm() {
        this.newContact.name = '';
        this.newContact.phone = '';
      },
      deleteContact(index) {
        this.contacts.splice(index, 1);
        this.saveContacts();
      }
    },
    template: `
    <div>
      <h2>Phonebook</h2>
      <br>
      <form @submit.prevent="addContact">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" required v-model="newContact.name">
        <label for="phone">Phone:</label>
        <input type="text" class="form-control" id="phone" required v-model="newContact.phone">
        <br>
        <button class="btn btn-success" type="submit">Add Contact</button>
      </form>
      <br>
      <table  id="example" class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(contact, index) in contacts" :key="index">
            <td>{{ contact.name }}</td>
            <td>{{ contact.phone }}</td>
            <td><button class="btn btn-danger" @click="deleteContact(index)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
  
  });
  