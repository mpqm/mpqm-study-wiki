package TrieTree;

import java.util.Map;
import java.util.Stack;

public class Trie {
    Node rootNode; // root노드(데이터 없음, 자식들 저장 가능, 마지막 아님)

    // trie 를 생성할 때 root노드 생성
    public Trie() { rootNode = new Node(); }

    // 단어를 입력받아서 반환하는 건 없는 insert 기능
    public Integer insert(String word) {
        Node currentNode = this.rootNode;
        //  단어의 길이만큼 반복
        for (int i = 0; i < word.length(); i++) {
            // 만약 현재 노드의 자식노드들 중에서 현재 글자가 포함되어 있으면
            if(currentNode.getChildNodes().containsKey(word.charAt(i))) {
                // 현재 노드의 현재 글자에 해당하는 자식노드로 넘어간다.
                currentNode = currentNode.getChildNodes().get(word.charAt(i));
            } else { // 그렇지 않으면
                // 새로운 노드 생성(현재 글자, 자식들 저장 가능, 마지막 아님)
                Node newNode = new Node(word.charAt(i));
                // 현재 노드의 자식노드에 현재 글자를 키로 새로운 노드를 값으로 추가
                currentNode.getChildNodes().put(word.charAt(i), newNode);
                // 현재 노드를 새로 생성한 노드로 변경
                currentNode = newNode;
            }
        }
        //  현재 노드를 마지막 노드라고 표시
        currentNode.setLast(currentNode.getLast() + 1);
        return currentNode.getLast();
    }

    public Integer search2(String word) {
        Node currentNode = this.rootNode;
        for (int i = 0; i < word.length(); i++) {
            if(currentNode.getChildNodes().containsKey(word.charAt(i))) {
                currentNode = currentNode.getChildNodes().get(word.charAt(i));
            }
        }
        return currentNode.getLast();
    }

    public Integer search(String word) {
        Stack<Node> nodeStack = new Stack<>();
        Stack<String> wordStack = new Stack<>();
        nodeStack.push(this.rootNode);
        wordStack.push(word);
        int total = 0;
        while (!nodeStack.isEmpty()) {
            Node currentNode = nodeStack.pop();
            String currentWord = wordStack.pop();
            if (currentWord.isEmpty()) {
                total += currentNode.getLast();
                continue;
            }
            char currentChar = currentWord.charAt(0);
            String remainingWord = currentWord.substring(1);

            if (currentChar == '?') {
                for (Node child : currentNode.getChildNodes().values()) {
                    nodeStack.push(child);
                    wordStack.push(remainingWord);
                }
            } else {
                Node nextNode = currentNode.getChildNodes().get(currentChar);
                if (nextNode != null) {
                    nodeStack.push(nextNode);
                    wordStack.push(remainingWord);
                }
            }
        }

        return total;
    }

    public Integer searchRecur(String word) {
        return searchHelper(word, 0, this.rootNode);
    }

    private Integer searchHelper(String word, int index, Node currentNode) {
        if (index == word.length()) {
            return currentNode.getLast();
        }

        char currentChar = word.charAt(index);
        if (currentChar == '?') {
            int total = 0;
            for (Node child : currentNode.getChildNodes().values()) {
                total += searchHelper(word, index + 1, child);
            }
            return total;
        } else {
            Node nextNode = currentNode.getChildNodes().get(currentChar);
            if (nextNode == null) {
                return 0;
            }
            return searchHelper(word, index + 1, nextNode);
        }
    }

    public void printTrie() {
        printTrie(this.rootNode, "", true);
    }

    private void printTrie(Node currentNode, String prefix, boolean isTail) {
        if (currentNode.getData() != null) {
            System.out.println(prefix + (isTail ? "└── " : "├── ") + currentNode.getData() + (currentNode.getLast() != 0 ? " (end:"+currentNode.getLast()+")" : ""));
        }
        Map<Character, Node> childNodes = currentNode.getChildNodes();
        int size = childNodes.size();
        int i = 0;
        for (Map.Entry<Character, Node> entry : childNodes.entrySet()) {
            i++;
            printTrie(entry.getValue(), prefix + (isTail ? "    " : "│   "), i == size);
        }
    }
}
