package TrieTree;

import java.util.HashMap;
import java.util.Map;

public class Node {
    private Character data;
    private Map<Character, Node> childNodes;
    private Integer last;

    public Node() {
        this.data = null;
        this.childNodes = new HashMap<>();
        this.last = 0;
    }

    public Node(Character data) {
        this.data = data;
        this.childNodes = new HashMap<>();
        this.last = 0;
    }

    public Node(Character data, Integer last) {
        this.data = data;
        this.childNodes = new HashMap<>();
        this.last = last;
    }

    public Character getData() {
        return data;
    }

    public void setData(Character data) {
        this.data = data;
    }

    public Map<Character, Node> getChildNodes() {
        return childNodes;
    }

    public void setChildNodes(Map<Character, Node> childNodes) {
        this.childNodes = childNodes;
    }

    public Integer getLast() {
        return last;
    }

    public void setLast(Integer last) {
        this.last = last;
    }
}

