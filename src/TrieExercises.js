import { CustomTrie } from "./CustomTrie.js";

let word1 = "can";
let word2 = "car";
let word3 = "cat";
let word4 = "dog";
let word5 = "rat";

let trie1 = new CustomTrie();

trie1.insertion(word1);
trie1.insertion(word2);
trie1.insertion(word3);
trie1.insertion(word4);
trie1.insertion(word5);
// console.log(trie1.search(word1));
// console.log(trie1);
// console.log(trie1.collectAllWords());
// console.log(trie1.collectAllWordsWithAsterisk());
// console.log(trie1.autocomplete("ca"));
// trie1.autocompletePlusPrefix("ca");
// trie1.autocompleteWrongWordPlusPrefixV1("cas");
console.log(trie1.autocompleteWrongWordPlusPrefixV1("cas"));