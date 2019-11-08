const profile = {
  name: "siwin",
  age: 30,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// we need to mirror the structure of the profile object if we want to destructure them with annotations
const { age }: { age: number } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
