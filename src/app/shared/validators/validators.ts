import { FormControl } from "@angular/forms";

export const cantbeStrider = ( control:FormControl ) => {

  const value:string = control.value.trim().toLowerCase();

  if( value === 'strider' ){
    return {
      noStrider: true,
    }
  }

  return null;
}
