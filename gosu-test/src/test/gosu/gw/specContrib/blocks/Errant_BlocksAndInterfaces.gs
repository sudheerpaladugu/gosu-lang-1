package gw.specContrib.blocks

class Errant_BlocksAndInterfaces {
  interface MyBInterface {
    function myfun()
  }

  function testBlocksAndInterfaces() {
    var b1: block()
    var i1: MyBInterface

    var b2: block(o: Object)

    var b = new MyBInterface() {
      override function myfun() {
      }
    }
    //IDE-1329
    b1 = i1      //## issuekeys: INCOMPATIBLE TYPES. FOUND:

    //Error expected. Assigning interface type to anonymous class type
    b = i1      //## issuekeys: INCOMPATIBLE TYPES. FOUND: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.BLOCKS.BLOCKSMAIN.ERRANT_BLOCKSANDINTERFACES.MYBINTERFACE', REQUIRED: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.BLOCKS.BLOCKSMAIN.ERRANT_BLOCKSANDINTERFACES.MYBINTERFACE'
    b2 = i1      //## issuekeys: INCOMPATIBLE TYPES. FOUND: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.BLOCKS.BLOCKSMAIN.ERRANT_BLOCKSANDINTERFACES.MYBINTERFACE', REQUIRED: 'BLOCK(OBJECT)'

    i1 = b1
    i1 = b2      //## issuekeys: INCOMPATIBLE TYPES. FOUND: 'BLOCK(OBJECT)', REQUIRED: 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.BLOCKS.BLOCKSMAIN.ERRANT_BLOCKSANDINTERFACES.MYBINTERFACE'
  }

}