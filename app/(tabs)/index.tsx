import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "cornsilk" }}>
      <ScrollView style={{ margin: 30, backgroundColor: "cornsilk" }}>
        {/* Welcome section */}
        <View style={styles.nameContainer}>
          <View>
            <Text style={styles.name}>Hello, Devs </Text>
            <Text>20 task today </Text>
          </View>
          <View>
            <Image
              source={require("@/assets/images/man.png")}
              style={styles.personImage}
            />
          </View>
        </View>

        {/* Search section */}
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            //value={searchPhrase}
            //onChangeText={setSearchPhrase}
            /*  onFocus={() => {
                  setClicked(true);
               }} */
          />
        </View>

        {/* Category section */}
        <View style={{ marginTop: 20 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Categories</Text>
          </View>

          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 700,
              }}
            >
              <View style={styles.categoryCard}>
                <Text style={styles.categoryItemText}>Exercise</Text>
                <Text>12 Tasks</Text>
                <Image
                  source={require("@/assets/images/exercise.png")}
                  style={styles.categoryImg}
                  // resizeMode="contain"
                />
              </View>

              <View style={styles.categoryCard}>
                <Text style={styles.categoryItemText}>Study</Text>
                <Text>12 Tasks</Text>
                <Image
                  source={require("@/assets/images/study.png")}
                  style={styles.categoryImg}
                  // resizeMode="contain"
                />
              </View>

              <View style={styles.categoryCard}>
                <Text style={styles.categoryItemText}>Code</Text>
                <Text>6 Tasks</Text>
                <Image
                  source={require("@/assets/images/exercise.png")}
                  style={styles.categoryImg}
                />
              </View>

              <View style={styles.categoryCard}>
                <Text style={styles.categoryItemText}>Cook</Text>
                <Text>4 Tasks</Text>
                <Image
                  source={require("@/assets/images/exercise.png")}
                  style={styles.categoryImg}
                />
              </View>
            </View>

            <View style={styles.categoryCard}>
                <Text style={styles.categoryItemText}>Meditate</Text>
                <Text>6 Tasks</Text>
                <Image
                  source={require("@/assets/images/exercise.png")}
                  style={styles.categoryImg}
                />
              </View>

              <View style={styles.categoryCard}>
                <Text style={styles.categoryItemText}>Cry</Text>
                <Text>6 Tasks</Text>
                <Image
                  source={require("@/assets/images/exercise.png")}
                  style={styles.categoryImg}
                />
              </View>

              <View style={styles.categoryCard}>
                <Text style={styles.categoryItemText}>Wash clothes</Text>
                <Text>6 Tasks</Text>
                <Image
                  source={require("@/assets/images/exercise.png")}
                  style={styles.categoryImg}
                />
              </View>

              <View style={styles.categoryCard}>
                <Text style={styles.categoryItemText}>Sleep</Text>
                <Text>6 Tasks</Text>
                <Image
                  source={require("@/assets/images/exercise.png")}
                  style={styles.categoryImg}
                />
              </View>
          </ScrollView>
        </View>

        {/* Ongoing Tasks section */}
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Ongoing Tasks
            </Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>
              Mobile app developement
            </Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>
              BURPEES
            </Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Web developement</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Push ups</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>UI/UX Design</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Marinating</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Cybersecurity</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Meditation</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Ubuntu download</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Software update</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Machine washing clothes</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Cooking</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Mobile App Development</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Checking code errors</Text>
          </View>

          <View style={styles.ongoingTaskCard}>
            <Text style={styles.ongoingTaskItemText}>Correcting code errors</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  personImage: {
    height: 50,
    width: 50,
  },

  categoryCard: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    padding: 15,
    height: 200,
    width: 160,
    // margin: 16,
  },

  ongoingTaskCard: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    padding: 15,
    height: 80,
    marginTop: 5,
    marginBottom: 5,
    // margin: 16,
  },

  categoryImg: {
    height: 120,
    width: 120,
    //paddingTop: 50,
    marginTop: 10,
    marginLeft: 10,
  },

  ongoingTaskItemText: {
    paddingTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },

  categoryItemText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  searchBox: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 20,
  },

  searchInput: {
    fontSize: 18,
    marginLeft: 10,
    //width: "90%",
    height: 40,
  },
});
