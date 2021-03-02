import { BookModel } from './bookModel';

export const BOOKS: BookModel[] = [
  { name: 'The Great Gatsby', description: 'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roar...', price: 15, category: 2, createDate: 1925, isAvailable: true  },
  { name: 'Pride and Prejudice', description: 'The book is narrated in free indirect speech following the main character Elizabeth Bennet as she deals with matters of upbringing, marriage, moral rightness and education in her aristocratic socie...', price: 12, category: 2, createDate: 1813, isAvailable: true  },
  { name: 'Frankenstein', description: 'It is a pro-science novel that at its heart shows Dr Frankenstein as the callous fiend of the story, who created a being and was not willing to accept responsibility for his actions.' , price: 16, category: 1, createDate: 1818, isAvailable: true},
  { name: 'Solaris', description: 'It follows a team of humans on a space station who are trying to understand the mysterious living ocean on the planet Solaris.', price: 16, category: 1, createDate: 1961, isAvailable: false },
  { name: 'Dune', description: 'The series is set 20,000 years in the future in galaxies stuck in the feudal ages, where computers are banned for religious reasons and noble families rule whole planets.', price: 12, category: 1, createDate: 1965, isAvailable: true },
  { name: 'Fahrenheit 451', description: 'The novel presents a future American society where books are outlawed and "firemen" burn any that are found.', price: 9, category: 3, createDate: 1954, isAvailable: true },
  { name: 'Harry Potter and the Philosopher Stone', description: 'It follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.', price: 18, category: 3, createDate: 1997, isAvailable: false },
  { name: 'The Da Vinci Code', description: 'In this volume, Professor Robert Langdon is brought to Paris on a whirl to shed some light on a bizarre murder in the Louvre.', price: 10, category: 0, createDate: 2003, isAvailable: true },
];