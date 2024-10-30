package object_example;

public class OverChild extends OverParent{
    @Override
    public Integer sum(Integer num01, Integer num02) { return num01 + num02 + 10; }
}
