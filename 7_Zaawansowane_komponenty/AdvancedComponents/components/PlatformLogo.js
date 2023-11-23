import React from 'react';
import {Platform, Image, View, StyleSheet, ImageBackground} from 'react-native';

const PlatformLogo = () => {
    const logo = Platform.select({
        ios: <ImageBackground source={{uri:"https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph/2048/5315_-_Apple-512.png"}} style={styles.size} />,
        android: <ImageBackground source={{uri:"https://d1qg2exw9ypjcp.cloudfront.net/assets/prod/22884/0x0-0_p17s2tfgc31jte13d51pea1l2oblr3.png"}} style={styles.size} />,
        default: <ImageBackground source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg"}} style={styles.size} />
    });

    console.log(logo);
    return (
        <View>
            {logo}
        </View>
    );
};

const styles = StyleSheet.create({
    size: {
        width: 200,
        height: 200
    }
})

export default PlatformLogo;
