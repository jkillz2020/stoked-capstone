"use strict";

app.factory('ResortFactory', function($q, $http, FIREBASE_CONFIG){

  var getResortList=function(userId){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Resorts.json?orderBy="uid"&equalTo="${userId}"`)
        .success(function(response){
          console.log("response", response)
          let Resorts =[];
          Object.keys(response).forEach(function(key){
            response[key].id=key;
            Resorts.push(response[key]);
          });
          resolve(Resorts);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        })
    })
  }

  var postNewResort = function(newResort){
    return $q((resolve, reject)=>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/Resorts.json`,
        JSON.stringify({
          city: newResort.city,
          resortName: newResort.resortName,
          rating: newResort.rating,
          state: newResort.state,
          streetAddress: newResort.streetAddress,
          zipcode: newResort.zipcode,
          uid: newResort.uid
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

  var deleteResort =  function(resortId){
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/Resorts/${resortId}.json`)
      .success(function(deleteResponse){
        console.log("success")
        resolve(deleteResponse);
      })
      .error(function(deleteError){
        reject(deleteError);
      })
    })
  }

  var getSingleResort =  function(resortId){
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Resorts/${resortId}.json`)
      .success(function(getSingleResponse){
        console.log("success", getSingleResponse)
        resolve(getSingleResponse);
      })
      .error(function(getSingleError){
        reject(getSingleError);
      })
    })
  }


var editResort = function(editResort){
    return $q((resolve, reject)=>{
      $http.put(`${FIREBASE_CONFIG.databaseURL}/Resorts/${editResort.id}.json`, 
        JSON.stringify({
          city: editResort.city,
          resortName: editResort.resortName,
          rating: editResort.rating,
          state: editResort.state,
          streetAddress: editResort.streetAddress,
          zipcode: editResort.zipcode,
          uid: editResort.uid
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


  return {getResortList:getResortList,
          postNewResort:postNewResort,
          deleteResort:deleteResort,
          getSingleResort:getSingleResort,
          editResort:editResort
        }
     
});