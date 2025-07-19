import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Premium IPTV Player!</Text>

      <Link href="/iptv" asChild>
        <Pressable style={{ padding: 10, backgroundColor: '#007bff', marginTop: 20 }}>
          <Text style={{ color: 'white' }}>Go to IPTV Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}
