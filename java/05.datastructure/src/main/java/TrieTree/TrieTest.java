package TrieTree;

public class TrieTest {
    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insert("test");
        trie.insert("teat");
        trie.insert("tebt");
        trie.insert("tebt");
        trie.insert("tebt");
        trie.insert("te");
        trie.insert("tast");
        trie.insert("tast");
        trie.insert("tact");
        trie.insert("tabt");
        trie.printTrie();

        System.out.println(trie.search2("test"));
        System.out.println(trie.search2("tebt"));
        System.out.println(trie.search2("tast"));
        System.out.println(trie.search("t??t"));
    }
}
