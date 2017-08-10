/**
 * Created by enrico on 09/08/17.
 */
module.exports = function(reload,serviceBridge){
    /* use reload to require js file or npm modules
     * and use serviceBridge for access to service
     * such as persistenceService (aka NativeStorage) or
     * localStorage emulator (aka DEStorage)
     */

     /* native storage available api
        getItem(key:string,success:Function,fail:Function):void
        setItem(key:string,value,success:Function,fail:Function):void
        deleteItem(key:string,success:Function,fail:Function):void
        clear(success:Function,fail:Function):void
     */
    var toolsNativeStorage = serviceBridge.getService("nativeStorage");


    /* localStorage storage available api
        set(key:string, value):void
        setObject(key:string, value:Object):void
        get(key:string):string
        getObject(key:string):Object
        remove(key):void
        clear():void
        getLength():number
        printAllData():void
     */
    var toolsDEStorage = serviceBridge.getService("localStorage");

    // NOT YET AVAILABLE
    var toolsUtilities = serviceBridge.getService("Utilities");

    // load your library local
    //
    //var libraryPath="./www/lib/";
    //moment = require(libraryPath + 'moment.js');
    //_ = require(libraryPath + 'lodash.min.js');


    // or via npm:
    //_ = require('lodash');

    //Define your custom adapter here (N.B: define adapter globally);
    /* example: NativeStora DE implementation:*/
    NativeStorage = {
        set:function(key,value,success,fail){
            toolsNativeStorage.setItem(key,value,success,fail);
        },
        get:function(key,success,fail){
            toolsNativeStorage.getItem(key,success,fail);
        },
        clear:function(success,fail){
          toolsNativeStorage.clear(success,fail);
        }
    };

    DEStorage = toolsDEStorage;
    Utilities = toolsUtilities;
}
