
public class Passenger {
  private String first_name;
  private String last_name;
  
  public Passenger(String first, String last){
    first_name = first;
    last_name = last;
  }
  
  public void setLast(String last){
    last_name = last;
  }
  
  public void setFirst(String first){
    first_name = first;
  }
  
  public String getLast(){
    return last_name;
  }
  
  public String getFirst(){
    return first_name;
  }
  
  public String toString(){
    return "Passenger name is " + first_name + last_name;
  }
}


public class PassengerList {
  
}


public class Airline {

}


public class Reservation {

}


public class SeatingChart {
  private int rows;
  private int cols;
  Passenger [][] passenger;
  
  public SeatingChart(){
    
  }
  
  public int[] search(Passenger name){
    
  }
  
  public boolean remove(Passenger name, WaitingList w){
    
  }
  
  public void toString(){
    
  }
  
  public boolean setPassenger(Passenger name, int row, int col ){
    
  }
  
  public boolean UpdatePassenger(Passenger oldname, Passenger newname){
    
  }

  public boolean UpdatePassenger(Passenger name, int newrow, int newcol){
    
  }
  
  public boolean setPassenger(Passenger name, WaitingList wl){
    
  }
  
  public boolean isSeatingChartEmpty(){
    
  }
}


public class WaitingList {
  private int size;
  Passenger[] waitingPass;
  
  public WaitingList(){
    System.out.println(waitingPass);
  }
  
  public Passenger[] getList(){
    return waitingPass;
  }
  
  public void setList(){
    
  }
  
  public boolean CheckifWLEmpty(){
    
  }
  
  public boolean moveup(){
    
  }
  
  public Passenger popPassenger(){
    
  }
  
  public boolean AddPassenger(Passenger name){
    
  }
}
