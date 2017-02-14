package gw.specContrib.classes.optional_params

uses gw.util.Pair
uses gw.lang.reflect.IType

class Errant_OptionalParams {
  function testJavaVarArgAsOptional() {
    String.join( "hi", {"asfd"} )
    String.join( "hi" )
    String.join()  //## issuekeys: MSG_WRONG_NUMBER_OF_ARGS_FOR_METHOD_ON_CLASS, MSG_WRONG_NUMBER_OF_ARGS_TO_FUNCTION

    Arrays.asList()
    Arrays.asList( {9} )
  }

  function testVarArgsWithOverloadedMethods() {
    var l1: ImmutableList<Pair<IType, Object>> = ImmutableList.of()
    var l2: ImmutableList<Pair<IType, Object>> = ImmutableList.of(Pair.make(String, ""))
    var l3: ImmutableList<Pair<IType, Object>> = ImmutableList.of(Pair.make(String, ""), {})
  }
}