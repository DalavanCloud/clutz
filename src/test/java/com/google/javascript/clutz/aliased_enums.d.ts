declare namespace ಠ_ಠ.clutz.nested.bar {
  type HahaEnum = number ;
  var HahaEnum : {
    A : HahaEnum ,
  };
}
declare module 'goog:nested.bar.HahaEnum' {
  import alias = ಠ_ಠ.clutz.nested.bar.HahaEnum;
  export default alias;
}
declare namespace ಠ_ಠ.clutz.nested.baz {
  type Enum = number ;
  var Enum : {
    A : Enum ,
  };
}
declare module 'goog:nested.baz.Enum' {
  import alias = ಠ_ಠ.clutz.nested.baz.Enum;
  export default alias;
}
