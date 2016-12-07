"use strict";

app.factory('RunFactory', function($q, $http, FIREBASE_CONFIG){

  var getRunList=function(userId){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Runs.json?orderBy="uid"&equalTo="${userId}"`)
        .success(function(response){
          console.log("response", response)
          let run =[];
          Object.keys(response).forEach(function(key){
            response[key].id=key;
            run.push(response[key]);
          });
          resolve(run);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        })
    })
  }

  var postNewRun = function(newRun{
    return $q((resolve, reject)=>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/Runs.json`,
        JSON.stringify({
          name: newRun.name,
          stokeId: newRun.stokeId,
          rating: newRun.rating,
          uid: newRun.uid
        })
      )
        .success(function(postResponse){
          resolve(postResponse);
        })
        .error(function(postError){
          reject(postError);
        })
    })
  }

  var deleteRun=  function(runId){
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/Runs/${runId}.json`)
      .success(function(deleteResponse){
        console.log("success")
        resolve(deleteResponse);
      })
      .error(function(deleteError){
        reject(deleteError);
      })
    })
  }

  var getSingleRun=  function(runId){
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Runs/${runId}.json`)
      .success(function(getSingleResponse){
        console.log("success", getSingleResponse)
        resolve(getSingleResponse);
      })
      .error(function(getSingleError){
        reject(getSingleError);
      })
    })
  }


var editRun= function(editRun{
    return $q((resolve, reject)=>{
      $http.put(`${FIREBASE_CONFIG.databaseURL}/Runs/${editRunid}.json`, 
        JSON.stringify({
          name: editRun.name,
          stokeId: editRun.stokeId,
          rating: editRun.rating,
          uid: editRun.uid
      })
    )
      .success(function(editResponse){
        resolve(editResponse);
      })
      .error(function(editError){
        reject(editError);
      })
    })
  }


  return {getRunList:getRunList,
          postNewRun:postNewRun,
          deleteRun:deleteRun,
          getSingleRun:getSingleRun,
          editRun:editRun        }
     
});