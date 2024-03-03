class Telephone {
    constructor() {
      this.phoneNumbers = new Set();
      this.observers = new Set();
    }
  
    add(observer) {
      this.observers.add(observer);
    }
  
    remove(observer) {
      this.observers.delete(observer);
    }
  
    notify(phoneNumber) {
      for (const observer of this.observers) {
        observer.notify(phoneNumber);
      }
    }
  
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.add(phoneNumber);
    }
  
    removePhoneNumber(phoneNumber) {
      if (this.phoneNumbers.has(phoneNumber)) {
        this.phoneNumbers.delete(phoneNumber);
      }
    }
  
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.has(phoneNumber)) {
        console.log(`Dialing ${phoneNumber}...`);
        this.notify(phoneNumber);
      } else {
        console.log(`Error: ${phoneNumber} is not in the phone book.`);
      }
    }
  }
  
  class Observer {
    notify(phoneNumber) {
      // To be implemented by subclasses
    }
  }
  
  // Observer 1: Prints the phone number
  class PrintPhoneNumberObserver extends Observer {
    notify(phoneNumber) {
      console.log(`Observer 1: Dialed ${phoneNumber}`);
    }
  }
  
  // Observer 2: Prints a message with the dialed phone number
  class CustomMessageObserver extends Observer {
    notify(phoneNumber) {
      console.log(`Observer 2: Now Dialing ${phoneNumber}`);
    }
  }
  
   // Example usage:
  const telephone = new Telephone();
  
  const observer1 = new PrintPhoneNumberObserver();
  const observer2 = new CustomMessageObserver();
  
  // Add observers to the telephone
  telephone.add(observer1);
  telephone.add(observer2);
  
  // Add phone numbers
  telephone.addPhoneNumber("2348092822");
  telephone.addPhoneNumber("2347023232");
  
  // Dial a phone number
  telephone.dialPhoneNumber("2348092822");
  
  // Remove a phone number
  telephone.removePhoneNumber("2348092822");
  
  // Try dialling the removed phone number
  telephone.dialPhoneNumber("2348092822");
  
  // Dial another phone number
  telephone.dialPhoneNumber("2347023232");
   