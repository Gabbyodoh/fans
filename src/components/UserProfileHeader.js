import { useRouter, } from "expo-router";
import { View, Text, ImageBackground, StyleSheet, Image,  Pressable,  SafeAreaView } from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useState } from "react";

 
const UserProfileHeader = ({user, isSubscribed, setIsSubscribed}) => {
   
    const router = useRouter();

    return (
        <View>
            <ImageBackground source={{uri: user.coverImage}} style={styles.cover}>
                <View style={styles.overlay}/>
                <SafeAreaView style={
                    {marginHorizontal:10, 
                    flexDirection: 'row', 
                    alignItems:'center'}}
                >
                    <Ionicons 
                        onPress={() => router.back()}
                        name="arrow-back" 
                        size={25} 
                        color="white"
                        style={{fontWeight:30}} 
                    />
                    <View>
                        <Text style={{
                              color: 'white', 
                              fontSize: 22, 
                              fontWeight:540
                            }}
                         >
                             {user.name}
                        </Text>
                        <Text style={{color: 'white'}}>
                            1.4k · post 44.3k · likes · 15.3k fans
                        </Text>
                    </View>

                </SafeAreaView>
            </ImageBackground>
            <View style={{padding:10}}>
                <View style={{
                    flexDirection:'row', 
                    alignItems:'flex-end', 
                    justifyContent: 'space-between',  
                    marginTop:-50 
                    }}
                >
                    <Image src={user.avatar} style={styles.userImage}/>
                    <FontAwesome name="share-square-o" size={24} color="royalblue" />
                </View>
                <Text style={{fontSize:20, fontWeight:600, marginVertical:10}}>{user.name}</Text>
                <Text style={{color:'grey', marginBottom:10}}>@{user.handle}</Text>
                <Text style={{lineHeight:20}}>{user.bio}</Text>

                <Text style={{color:'grey', marginTop:20, fontWeight:'bold',}}>
                    SUBSCRIPTION
                </Text>

                <Pressable onPress={() => setIsSubscribed(!isSubscribed)} 
                    style={[styles.button, {backgroundColor: isSubscribed? 'white' : 'royalblue'}]}>
                    <Text style={[styles.buttonText, {color: isSubscribed? 'royalblue' : 'white'}]}>
                        {isSubscribed 
                        ? 'SUBSCRIBED' 
                        : 'SUBSCRIBE'}
                    </Text>
                    <Text style={[styles.buttonText, {color: isSubscribed? 'royalblue' : 'white'}]}>
                        {user.subscriptionPrice == 0 
                        ? 'FOR FREE' 
                        : `$${user.subscriptionPrice} / month`}
                    </Text>
                </Pressable>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    cover: {
      height:200,
      width:'100%',
    },
    overlay: {
      backgroundColor:'rgba(0,0,0,0.4)',
      ...StyleSheet.absoluteFillObject
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius:100,
        borderColor:'white',
        borderWidth:3,
        marginRight:10,
        
    },
    buttonText: {
        fontSize:20,
        color:'royalblue',
        fontWeight:600,
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:50,
        padding:15,
        paddingHorizontal:20,
        marginVertical:10
    }
});

export default UserProfileHeader;