import { CustomTrieNode } from "./CustomTrieNode.js";

export class CustomTrie {
    root;

    constructor() {
        this.root = new CustomTrieNode();
    }

    search(word) {
        let currentNode = this.root;
        
        for(let char of word) {
            if(currentNode.children[char]) {
                currentNode = currentNode.children[char];
            } else {
                return null;
            }
        };

        return currentNode;
    }

    insertion(word) {
        let currentNode = this.root;

        for(let char of word) {
            if(currentNode.children[char]) {
                currentNode = currentNode.children[char];
            } else {
                let newNode = new CustomTrieNode();
                currentNode.children[char] = newNode;
                currentNode = newNode;
            }
        };

        currentNode.children["*"] = null;
    }

    collectAllWords(node = null, word = "", words = []) {
        let currentNode = node || this.root;

        for(let [key, childNode] of Object.entries(currentNode.children)) {
            if(key === "*") {
                words.push(word);
            } else {
                this.collectAllWords(childNode, word + key, words);
            }
        }

        return words;
    }

    collectAllWordsWithAsterisk(node = null, word = "", words = []) {
        let currentNode = node || this.root;

        for(let [key, childNode] of Object.entries(currentNode.children)) {
            if(key === "*") {
                words.push(word + key);
            } else {
                this.collectAllWordsWithAsterisk(childNode, word + key, words);
            }
        }

        return words;
    }

    autocomplete(prefix) {
        let currentNode = this.search(prefix);

        if(!currentNode) {
            return null;
        }

        return this.collectAllWords(currentNode);
    }

    autocompleteWrongWord(prefix) {
        let currentNode = this.search(prefix);

        if(!currentNode && prefix.length > 0) {
            currentNode = this.search(prefix.substring(0, prefix.length - 1));
        } else if(!currentNode && prefix.length <= 0) {
            return null;
        }

        return this.collectAllWords(currentNode);
    }

    autocompletePlusPrefix(prefix) {
        let autocompleteArray = this.autocomplete(prefix);

        let autocompletePlusPrefixArray = [];
        
        for(let element of autocompleteArray) {
            autocompletePlusPrefixArray.push(prefix + element);
        }

        console.log(autocompletePlusPrefixArray);
    }

    autocompleteWrongWordPlusPrefixV1(prefix) {
        let currentNode = this.root;
        
        let wordFoundSoFar = "";

        for(let char of prefix) {
            if(currentNode.children[char]) {
                wordFoundSoFar += char;
                currentNode = currentNode.children[char];
            }
        }
        
        let autocompleteWrongWordArray = this.autocompleteWrongWord(wordFoundSoFar);

        let autocompleteWrongWordPlusPrefixV1Array = [];
        
        for(let element of autocompleteWrongWordArray) {
            autocompleteWrongWordPlusPrefixV1Array.push(wordFoundSoFar + element);
        }

        if(autocompleteWrongWordPlusPrefixV1Array.length > 0) {
            return autocompleteWrongWordPlusPrefixV1Array;
        } else {
            return prefix;
        }
    }
}